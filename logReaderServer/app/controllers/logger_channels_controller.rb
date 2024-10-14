class LoggerChannelsController < ApplicationController

  def index

  end

  def create
    p "Here controler"
    ActionCable.server.broadcast 'logger_channel', 'INIT'
    head :ok

    render json: { message: 'OK' }, status: :ok
  end
end
