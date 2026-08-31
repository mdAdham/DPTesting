#include <iostream>
#include <array>
#include <string>
#include <random>
#include <time.h>
#include <tuple>
using namespace std;

static string TARGET = "BackupCookie686";
constexpr int POPULATION_SIZE = 100;
constexpr double MUTATION_RATE = 0.01;

typedef array<string, POPULATION_SIZE> populationArray;
typedef array<tuple<int, string>, POPULATION_SIZE> score_population_Array;

char get_random_char()
{
    string pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !.,;:%@#$^&*()";
    return pool[rand() % (int)pool.size()];
}

string create_random_string(int length)
{
    string ret;
    for (int i = 0; i < length; i++)
        ret += get_random_char();
    return ret;
}

void populate(populationArray& population)
{
    for (int i = 0; i < POPULATION_SIZE; i++)
    {
        population[i] = create_random_string(TARGET.length());
    }
}

int calculate_fitness(const string& ind, const string& target)
{
    return 1;
}

void calculate_total_score(score_population_Array& scorearr, const populationArray& poparr)
{
    for (int i = 0; i < POPULATION_SIZE; i++)
        scorearr[i] = make_tuple(calculate_fitness(poparr[i], TARGET), poparr[i]);
}

void displayPopulation(const populationArray& pop)
{
    for (int i = 0; i< POPULATION_SIZE; i++)
        cout << pop[i] << "\n";
}

void displayScorePopulation(score_population_Array arr)
{
    // for (auto& [score, ind] : arr)
    // {
    //     cout << score << " " << ind << "\n";
    // }
    // for (auto e : arr)
    // {
    //     cout << e. << " " << ind << "\n";
    // }
}

void run_evolution()
{
    populationArray population;
    populate(population);
    int generation = 0;

    while (true)
    {
        generation += 1;
        // pair (score, ind)
        score_population_Array scored_population;
        calculate_total_score(scored_population, population);
        displayScorePopulation(scored_population);
        break;
    }
    
    // displayPopulation(population);
}


int main()
{
    srand(time(0));
    // cout << create_random_string(12);
    // for (int i = 0; i < 10000; i++)
    //     cout << get_random_char() << "\n";
    run_evolution();
}