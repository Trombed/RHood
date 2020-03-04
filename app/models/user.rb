# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  funds           :float            default(1000000.0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :password_digest, :session_token, :email, presence: true
    # validates :username, :email, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    after_initialize :ensure_session_token
    
    attr_reader :password 

    has_many :watch_lists,
    primary_key: :id,
    foreign_key: :user_id

    has_many :stocks,
    through: :watch_list,
    source: :stock

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
      end
    
      def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
      def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
      end
    
      def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
      end
    

end
