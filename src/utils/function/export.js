import { savePDF } from '@progress/kendo-react-pdf';

export const exportPDFWithMethod = async ({
    element,
    afterExport = () => {},
    fileName = 'export.pdf',
    landscape = false,
    options = {},
}) => {
    if (element) {
        await savePDF(
            element,
            {
                paperSize: 'A4',
                fileName: fileName.endsWith('.pdf')
                    ? fileName
                    : `${fileName}.pdf`,
                margin: {
                    left: 10,
                    // top: 60,
                    right: 10,
                    // bottom: 60,
                },
                pageTemplate: ({ pageNum, totalPages }) => {
                    return (
                        <div className="pdf-page-template">
                            <div className="header"></div>
                            <div className="footer">
                                <div className="page-index">
                                    {pageNum}/{totalPages}
                                </div>
                            </div>
                        </div>
                    );
                },
                landscape,
                ...options,
            },
            afterExport
        );
    } else {
        afterExport();
    }
};
