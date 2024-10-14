class LoggerChannel < ApplicationCable::Channel
  def subscribed
    # new line
    p "Mainlogger"
    stream_from "logger_channel"
  end

  def unsubscribed

    # Any cleanup needed when channel is unsubscribed
  end
end
