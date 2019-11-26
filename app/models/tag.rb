# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

  has_many :taggings

  has_many :notes, 
    through: :taggings, 
    source: :note
  
  belongs_to :author, 
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User
  
end

