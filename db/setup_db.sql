DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS rounds;
DROP TABLE IF EXISTS questions;

CREATE TABLE games (
    game_id INT GENERATED ALWAYS AS IDENTITY,
	game_date date NOT NULL,
	total_teams INT NOT NULL,
	winning_team VARCHAR ( 255 ) NOT NULL,
	losing_team VARCHAR ( 255 ) NOT NULL,
	PRIMARY KEY(game_id)
);

CREATE TABLE rounds (
    round_id INT GENERATED ALWAYS AS IDENTITY,
    game_id INT NOT NULL,
    category VARCHAR ( 255 ) NOT NULL,
    round_number INT NOT NULL,
    round_name VARCHAR ( 255 ) NOT NULL,
    PRIMARY KEY(round_id),
    CONSTRAINT fk_game
      FOREIGN KEY(game_id) 
	  REFERENCES games(game_id)
);

CREATE TABLE questions (
    question_id INT GENERATED ALWAYS AS IDENTITY,
    round_id INT NOT NULL,
    question VARCHAR ( 255 ) NOT NULL,
    answer VARCHAR ( 255 ) NOT NULL,
    total_correct_answers INT NOT NULL,
    PRIMARY KEY(question_id),
    CONSTRAINT fk_round
      FOREIGN KEY(round_id) 
	  REFERENCES rounds(round_id)
);