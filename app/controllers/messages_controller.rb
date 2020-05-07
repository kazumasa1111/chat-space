class MessagesController < ApplicationController
  def index
  end

  def create
    @group = Group.new(group_params)
  end

end
