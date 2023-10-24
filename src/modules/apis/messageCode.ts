const messageCodes = {
    SUCCESS: 'Success',
    CONTACT_ADMIN_FOR_SUPPORT:
        'Có lỗi xảy ra. Vui lòng liên hệ quản trị viên để được hỗ trợ',

    VALIDATION_ERROR: 'Dữ liệu không hợp lệ',
    PARSE_ERROR: 'Dữ liệu không hợp lệ',
    AUTHENTICATION_FAILED: 'Đăng nhập thất bại',
    NOT_AUTHENTICATED: 'Bạn chưa đăng nhập',
    NOT_FOUND: 'Không tìm thấy dữ liệu',
    SORT_TYPE_NOT_SUPPORT: 'This sort type is not supported',
    EXPIRED_SESSION: 'Phiên đăng nhập đã hết hạn',
    PAGE_NOT_FOUND: 'Chức năng này hiện không khả dụng',
    METHOD_NOT_ALLOWED: 'Method not allowed',

    SERVER_ERROR: 'Có lỗi xảy ra. Vui lòng thử lại sau',
    PERMISSION_DENIED: 'Bạn không có quyền thực hiện chức năng này',
    USER_DOES_NOT_HAVE_PERMISSIONS:
        'Bạn không có quyền thực hiện chức năng này',

    MISSING_FIELD: 'Dữ liệu không hợp lệ',

    INVALID_FIELD: 'Dữ liệu không hợp lệ',

    INVALID_ARGUMENTS: 'Dữ liệu không hợp lệ',

    CURRENT_PASSWORD_NOT_MATCH: 'Mật khẩu hiện tại không chính xác',
    USER_WITH_USERNAME_NOT_EXISTED:
        'Tài khoản không tồn tại hoặc đã bị khóa. Vui lòng liên hệ quản trị viên để được hỗ trợ',
    ACCOUNT_LOCKED_OR_DISABLE:
        'Tài khoản không tồn tại hoặc đã bị khóa. Vui lòng liên hệ quản trị viên để được hỗ trợ',

    SITE_NOT_FOUND:
        'Bệnh viện này hiện không khả dụng. Vui lòng liên hệ quản trị viên để được hỗ trợ',

    ROLE_NOT_FOUND:
        'Quyền truy cập của bạn hiện không khả dụng. Vui lòng liên hệ quản trị viên để được hỗ trợ',
    USER_NOT_BELONG_THIS_SITE: 'Tài khoản không thuộc bệnh viện này',

    NEED_LOGIN: 'Bạn cần đăng nhập để thực hiện chức năng này',
    INVALID_OR_EXPIRED_TOKEN: 'Phiên đăng nhập đã hết hạn',
    MISSING_ACCESS_TOKEN: 'Bạn cần đăng nhập để thực hiện chức năng này',
    INVALID_ACCOUNT:
        'Tài khoản không tồn tại hoặc đã bị khóa. Vui lòng liên hệ quản trị viên để được hỗ trợ',
    ACCOUNT_ACTIVATED:
        'Tài khoản của bạn đã được kích hoạt. Vui lòng đăng nhập',
    NOT_FOUND_USER_DEVICE_TOKEN: 'Phiên đăng nhập đã hết hạn',
    USER_ACTIVATION_NOT_FOUND: 'Mã kích hoạt không tồn tại',
    NEED_ACTIVATED:
        'Tài khoản của bạn chưa được kích hoạt. Vui lòng kiểm tra email để kích hoạt tài khoản',
    INVALID_USERNAME_OR_PASSWORD: 'Tên đăng nhập hoặc mật khẩu không chính xác',

    SUBJECT_NOT_FOUND_BY_UID: 'Bệnh nhân không tồn tại',
    SUBJECT_LOCKED: 'Bệnh nhân đã bị khóa',
    SUBJECT_NOT_LOCKED: 'Bệnh nhân chưa bị khóa',
    SUBJECT_REMOVED: 'Bệnh nhân đã bị xóa',

    VISIT_NOT_FOUND: 'Lần khám không tồn tại',
    VISIT_NOT_AVAILABLE: 'Lần khám không khả dụng',
    VISIT_IS_LOCKED: 'Làn khám đã bị khóa',
    VISIT_IS_NOT_COMPLETED: 'Lần khám chưa hoàn thành',

    ATTACHMENT_NOT_FOUND: 'Tài liệu đính kèm không tồn tại',

    FORM_NOT_FOUND: 'Form không tồn tại',

    ITEM_VALUE_REQUIRED: 'Vui lòng nhập đầy đủ thông tin',
    ITEM_VALUE_INVALID: 'Dữ liệu không hợp lệ',
    OBSERVATION_NOT_FOUND: 'Không tìm thấy dữ liệu',
    NOT_SUPPORTED_ITEMS: 'Không hỗ trợ các loại dữ liệu này',
    DUPLICATE_VALUE_FOR_ITEM: 'Dữ liệu trùng lặp cho câu',
    DUPLICATE_VALUE_FOR_ITEM_WITH_ORDINAL: 'Dữ liệu trùng lặp cho câu',
    OBSERVATION_IS_COMPLETED_OR_LOCKED: 'Không thể sửa dữ liệu đã hoàn thành',

    PRESCRIPTION_NOT_FOUND_BY_UID: 'Đơn thuốc không tồn tại',
    VITAL_NOT_FOUND_BY_UID: 'Chỉ số sinh hiệu chưa được nhập',

    FAMILY_HISTORY_NOT_FOUND: 'Tiền sử gia dình chưa được nhập',

    PROBLEM_HISTORY_NOT_FOUND: 'Tiền sử bệnh lý chưa được nhập',

    INTENSIVE_CASE_UNIT_NOT_FOUND: 'Chăm sóc y tế đặc biệt không tồn tại',

    DEPARTMENT_NOT_FOUND: 'Phòng ban không tồn tại',

    VISIT_REQUEST_NOT_FOUND: 'Yêu cầu thay đổi không tồn tại',

    USER_DOES_NOT_HAVE_ROLES: 'Bạn không có quyền truy cập',
    INVALID_TWO_FACTOR_CODE: 'Mã xác thực không hợp lệ',

    EMAIL_ALREADY_EXIST: 'Email đã tồn tại',
    THIS_FACEBOOK_ACCOUNT_ALREADY_EXIST: 'Tài khoản Facebook đã tồn tại',

    default: 'Có lỗi xảy ra... Vui lòng thử lại',
} as {
    [key: string]: string;
};

export default messageCodes;
