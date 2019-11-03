class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.integer :patient_id, null: false
      t.integer :therapist_id, null: false
      t.string :description
      t.timestamps
    end
  end
end
