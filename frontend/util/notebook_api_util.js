export const fetchAllNotebooks = () => (
    $.ajax({
        method: 'get', 
        url: 'api/notebooks'
    })
)

