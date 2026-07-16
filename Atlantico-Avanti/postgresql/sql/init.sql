CREATE TABLE usuarios (
                          id SERIAL PRIMARY KEY,
                          nome VARCHAR(100) NOT NULL,
                          idade INTEGER NOT NULL
);

INSERT INTO usuarios (nome, idade) VALUES
                                           ('Gabriel', 26),
                                           ('Rafaela', 31);