class Request < ApplicationRecord 
    validates :patient_id, :therapist_id, presence: true

    belongs_to :patient,
    foreign_key: :patient_id,
    class_name: :User

    belongs_to :therapist,
    foreign_key: :therapist_id,
    class_name: :User
    
end