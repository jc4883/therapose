class AddPriceToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :price, :integer
  end
end
