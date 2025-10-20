class ListingsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]

    def index
        @listings = Listing.all
    end

    def show
        @listing = Listing.find(params[:id])
    end
    
    def new
        @listing = current_user.listings.build
    end

    def create
        @listing = current_user.listings.build(listing_params)
        if @listing.save
            redirect_to @listing, notice: 'Listing was successfully created.'
        else
            render :new
        end
    end

    private
    def listing_params
        params.require(:listing).permit(:title, :description, :price, :image)
    end
end
