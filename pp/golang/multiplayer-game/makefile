GOCMD = go
GOBUILD = $(GOCMD) build
GOCLEAN = $(GOCMD) clean
GOTEST = $(GOCMD) test
GOGET = $(GOCMD) get

# Main build target
build:
	$(GOBUILD) -o multiplayer_game.exe -v

# Clean the project
clean:
	$(GOCLEAN)
	rm -f multiplayer_game

# Run the application
run:
	$(GOBUILD) -o multiplayer_game
	./multiplayer_game

# Test the application
test:
	$(GOTEST) ./...

# Get dependencies
get:
	$(GOGET) ./...

# Default target (if you just run 'make' without arguments)
default: build

.PHONY: build clean run test get
