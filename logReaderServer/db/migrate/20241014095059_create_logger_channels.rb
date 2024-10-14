class CreateLoggerChannels < ActiveRecord::Migration[7.0]
  def change
    create_table :logger_channels do |t|
      t.timestamps
    end
  end
end
