class LogReaderService
  def initialize(log_file_path)
    @log_file_path = log_file_path
  end

  def start
    File.open(@log_file_path) do |file|
      file.seek(0, IO::SEEK_END)  # Start at the end of the file

      loop do
        line = file.gets
        p "Sending"
        if line
          ActionCable.server.broadcast("logger_channel", line)
        else
          sleep(1)
        end
      end
    end
  end
end
