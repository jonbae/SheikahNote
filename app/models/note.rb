# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  content     :text             not null
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord

  belongs_to :author, 
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User
    
  belongs_to :notebook 

  has_many :taggings, dependent: :destroy

  has_many :tags, 
    through: :taggings, 
    source: :tag

end

