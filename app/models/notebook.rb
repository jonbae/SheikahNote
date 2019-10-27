# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord

  belongs_to :author,
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User
    
  has_many :notes, dependent: :destroy

end

