CREATE TABLE usuarios (
                          id SERIAL PRIMARY KEY,
                          nome VARCHAR(100) NOT NULL,
                          idade INTEGER NOT NULL,
                          email  VARCHAR(100) UNIQUE NOT NULL,
                          password VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, idade, email, password) VALUES
                                           ('Gabriel', 26, 'gabriel@example.com' , 'password'),
                                           ('Rafaela', 31, 'rafaela@example.com' , 'password');