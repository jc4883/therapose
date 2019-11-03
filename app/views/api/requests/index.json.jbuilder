@requests.each do |request|
  json.set! request.id do 
    json.partial! 'request', request: request
    #we can later selectively send patient or therapist info
    json.set! :patient do 
      json.extract! request.patient, :id, :username, :category, :price, :description
    end 
  end
end

