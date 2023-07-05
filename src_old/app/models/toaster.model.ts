export interface ToasterModel {
    type: ToasterType,
    message: string
}

enum ToasterType {
    success = 'success',
    error = 'error',
    warning = 'warning'
}