class CreateAboutMes < ActiveRecord::Migration[6.0]
  def change
    create_table :about_mes do |t|
      t.string :text

      t.timestamps
    end
  end
end
