import random

# Helper function to convert name to number
def name_to_number(name):
    if name == "rock":
        return 0
    elif name == "Spock":
        return 1
    elif name == "paper":
        return 2
    elif name == "lizard":
        return 3
    elif name == "scissors":
        return 4
    else:
        print("Error: Invalid name")
        return None

# Helper function to convert number to name
def number_to_name(number):
    if number == 0:
        return "rock"
    elif number == 1:
        return "Spock"
    elif number == 2:
        return "paper"
    elif number == 3:
        return "lizard"
    elif number == 4:
        return "scissors"
    else:
        print("Error: Invalid number")
        return None

# Main function to play RPSLS
def rpsls(player_choice):
    print("\n")  # Print a blank line to separate games
    print("Player chooses", player_choice)
    
    # Convert player_choice to player_number
    player_number = name_to_number(player_choice)
    if player_number is None:
        return
    
    # Generate computer's random choice
    comp_number = random.randrange(0, 5)
    comp_choice = number_to_name(comp_number)
    print("Computer chooses", comp_choice)
    
    # Determine the winner
    result = (player_number - comp_number) % 5
    if result == 0:
        print("Player and computer tie!")
    elif result == 1 or result == 2:
        print("Player wins!")
    else:
        print("Computer wins!")

# Test calls
rpsls("rock")
rpsls("Spock")
rpsls("paper")
rpsls("lizard")
rpsls("scissors")
