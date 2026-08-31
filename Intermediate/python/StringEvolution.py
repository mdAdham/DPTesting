import random
import string
import time

# --- Configuration ---
TARGET = "BackupCookie686"
POPULATION_SIZE = 100
MUTATION_RATE = 0.01  # 1% chance per character

# --- Helper Functions ---
def get_random_char():
    """Returns a random printable character."""
    pool = string.ascii_letters + string.digits + " !.,;:%@#$^&*()"
    return random.choice(pool)

def create_random_string(length):
    """Generates a random string of a specific length."""
    return "".join(get_random_char() for _ in range(length))

def calculate_fitness(individual, target):
    """Counts how many characters match the target exactly."""
    return sum(1 for c, t in zip(individual, target) if c == t)

def mutate(individual):
    """Randomly alters characters based on mutation rate."""
    genes = list(individual)
    for i in range(len(genes)):
        if random.random() < MUTATION_RATE:
            genes[i] = get_random_char()
    return "".join(genes)

# --- Main Evolution Loop ---
def run_evolution():
    # 1. Initialize random population
    population = [create_random_string(len(TARGET)) for _ in range(POPULATION_SIZE)]
    generation = 0
    
    while True:
        generation += 1
        
        # 2. Evaluate fitness for everyone
        scored_population = [(calculate_fitness(ind, TARGET), ind) for ind in population]
        
        # 3. Sort by highest fitness first
        scored_population.sort(key=lambda x: x[0], reverse=True)
        best_fitness, best_individual = scored_population[0]
        
        # Print progress
        print(f"Gen {generation:03d} | Best: '{best_individual}' | Fitness: {best_fitness}/{len(TARGET)}")
        
        # 4. Check for success condition
        if best_individual == TARGET:
            print(f"\nSuccess! Target reached in {generation} generations.")
            break
            
        # 5. Breed the next generation using the best individual (Elitist cloning)
        next_generation = [best_individual] # Keep the absolute best
        
        while len(next_generation) < POPULATION_SIZE:
            # Create variations of the best individual
            offspring = mutate(best_individual)
            next_generation.append(offspring)
            
        population = next_generation
        
def speedtest():
    timings = []
    for i in range(100):
        start = time.time()*1000
        run_evolution()
        end = time.time()*1000
        timings.append(int(end-start))
        
    timings.sort()
    
    print(timings[0])
    print(timings[1])

if __name__ == "__main__":
    # start = time.time()*1000
    run_evolution()
    # end = time.time()*1000
    
    # print (start)
    # print (end)
    
    # print(int(end-start))
    
    # speedtest()
