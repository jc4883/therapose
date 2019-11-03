class User < ApplicationRecord
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  

  has_many :requests_of_therapist,
  foreign_key: :therapist_id,
  class_name: :Request

  has_many :requests_of_patient,
  foreign_key: :patient_id,
  class_name: :Request

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password) 
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = nil
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token    
  end
end
