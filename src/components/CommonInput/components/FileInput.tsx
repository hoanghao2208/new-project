import useHasChanged from 'hooks/dataHandler/useHasChanged';
import _forEach from 'lodash/forEach';
import {
    FC,
    Fragment,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { FileStatus } from '../enums';
import IconRemoveItem from '../icons/IconRemoveItem';
import UploadFileIcon from '../icons/UploadFileIcon';
import { FileItem } from '../type';
import { useInputConfigContext } from '../InputConfigContext';
import { IInputProps } from '../type';

interface IFileInputProps extends FileItem {
    onRemove: (uid: string) => void;
    readOnly?: boolean;
    getFileUrl?: (uid: string) => Promise<{
        isSuccess: boolean;
        data: { url: string };
    }>;
}

const FileItemRow: FC<IFileInputProps> = memo(
    ({ uid, name, onRemove, status, readOnly, getFileUrl }) => {
        const [url, setUrl] = useState<string | null>(null);
        const handleClick = useCallback(() => {
            if (status === FileStatus.UPLOADED) {
                const getUrl = async () => {
                    if (!getFileUrl) return;
                    const response = await getFileUrl(uid);
                    if (response.isSuccess) {
                        setUrl(response.data.url);
                        window.open(response.data.url, '_blank');
                    }
                };
                if (!url) {
                    getUrl();
                } else {
                    window.open(url, '_blank');
                }
            }
        }, [getFileUrl, status, uid, url]);
        return (
            <div key={uid} className="file-input__item">
                <div
                    className={`file-input__item__name ${
                        status === FileStatus.UPLOADED ? 'active' : ''
                    }`}
                    onClick={handleClick}
                >
                    {name}
                </div>
                {!readOnly && (
                    <div
                        className="file-input__item__remove"
                        onClick={() => onRemove(uid)}
                    >
                        <IconRemoveItem />
                    </div>
                )}
            </div>
        );
    }
);
FileItemRow.displayName = 'FileItem';

const FileInput: FC<IInputProps> = memo(
    ({ value, onFilesChange, className, readOnly }) => {
        const fileInputRef = useRef<HTMLInputElement>(null);
        const [files, setFiles] = useState({} as { [uid: string]: FileItem });
        const fileList = useMemo(
            () => Object.values(files).sort((a, b) => a.ordinal - b.ordinal),
            [files]
        );
        const changedRef = useRef(false);
        const mountedRef = useRef(false);
        const { generateId } = useInputConfigContext();

        const handleChange = useCallback(
            (e: any) => {
                // onChange && onChange(e.target.value);
                const newRawFiles = e.target.files;
                let maxOrdinal = fileList.length
                    ? fileList[fileList.length - 1].ordinal
                    : 0;
                const newFiles = { ...files };
                _forEach(newRawFiles, (file: File) => {
                    const uid = generateId();
                    newFiles[uid] = {
                        name: file.name,
                        uid,
                        status: FileStatus.NEW,
                        url: '',
                        file,
                        ordinal: ++maxOrdinal,
                    };
                });
                changedRef.current = true;
                setFiles({ ...files, ...newFiles });
                e.target.value = [];
            },
            [fileList, files, generateId]
        );

        useEffect(() => {
            onFilesChange && onFilesChange(fileList, changedRef.current);
        }, [fileList, onFilesChange]);

        const openFileInput = useCallback(() => {
            fileInputRef.current?.click();
        }, []);

        const handleRemove = useCallback(
            (uid: string) => {
                const file2Remove = files[uid];
                if (file2Remove.status === FileStatus.NEW) {
                    const newFiles = { ...files };
                    delete newFiles[uid];
                    setFiles(newFiles);
                } else {
                    file2Remove.status = FileStatus.REMOVED;
                    changedRef.current = true;
                    setFiles({ ...files });
                }
            },
            [files]
        );

        const valueChanged = useHasChanged(value);
        useEffect(() => {
            if (valueChanged) {
                try {
                    const fileList = JSON.parse(value || '[]');
                    const data = {} as { [uid: string]: FileItem };
                    fileList.forEach((file: FileItem) => {
                        delete file.file;
                        data[file.uid] = {
                            ...files[file.uid],
                            ...file,
                        };
                    });
                    setFiles(data);
                } catch (error) {
                    console.warn(error);
                }
            } else if (!mountedRef.current) {
                mountedRef.current = true;
                try {
                    const fileList = JSON.parse(value || '[]');
                    const data = {} as { [uid: string]: FileItem };
                    fileList.forEach((file: FileItem) => {
                        delete file.file;
                        data[file.uid] = {
                            ...files[file.uid],
                            ...file,
                        };
                    });
                    setFiles(data);
                } catch (error) {
                    console.warn(error);
                }
            }
        }, [files, value, valueChanged]);

        return (
            <div className={`file-input ${className}`}>
                {fileList.map(file => {
                    if (file.status !== FileStatus.REMOVED) {
                        return (
                            <FileItemRow
                                key={file.uid}
                                {...file}
                                onRemove={handleRemove}
                                readOnly={readOnly}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
                {!readOnly && (
                    <Fragment>
                        <div
                            className="file-input__add"
                            onClick={openFileInput}
                        >
                            Tải lên
                            <div className="file-input__suffix">
                                <UploadFileIcon />
                            </div>
                        </div>
                        <input
                            type="file"
                            onChange={handleChange}
                            ref={fileInputRef}
                            hidden={true}
                        />
                    </Fragment>
                )}
            </div>
        );
    }
);
FileInput.displayName = 'FileInput';

export default FileInput;
