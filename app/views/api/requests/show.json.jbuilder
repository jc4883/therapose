json.extract! @request, :id, :description, :done
json.set! :patient do 
    json.extract! @request.patient, :username, :category, :price, :description
end 
