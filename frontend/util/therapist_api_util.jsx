export const fetchTherapists = (region, category) => {
    return $.ajax({
        method: 'GET',
        url: '/api/therapists',
        data: { 
            category,
            region
        }
    })
}

