CREATE TABLE CATALOGUE (
     ID SERIAL PRIMARY KEY,
     REF VARCHAR(50),
     DESIGNATION VARCHAR(255),
     PRIX FLOAT,
     DESCRIPTION VARCHAR(255)
);
INSERT INTO CATALOGUE (REF,DESIGNATION,PRIX,DESCRIPTION) VALUES ('A001','Combattant',10.5,'description A001');

INSERT INTO CATALOGUE (REF,DESIGNATION,PRIX,DESCRIPTION) VALUES ('A002','Poisson rouge',15.5,'description A002');

INSERT INTO CATALOGUE (REF,DESIGNATION,PRIX,DESCRIPTION) VALUES (,'A003','Guppy',6.5,'description A003');