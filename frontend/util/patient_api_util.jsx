export const fetchPatients = (region, category) => {
    return $.ajax({
        method: 'GET',
        url: '/api/patients',
        data: {
            category,
            region
        }
    })
}

