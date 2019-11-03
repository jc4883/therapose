class AddDoneToRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :requests, :done, :string
  end
end
