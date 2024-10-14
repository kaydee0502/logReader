log_file_path = "#{Rails.root}/log.txt"
require "#{Rails.root}/app/services/log_reader_service.rb"
Thread.new { LogReaderService.new(log_file_path).start }
