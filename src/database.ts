import * as sqlite from 'sqlite3';
let sqlite3 = sqlite.verbose()
const DBSOURCE = "db.sqlite"

export let dbnew = new sqlite3.Database(DBSOURCE, async (err: any) => {
    dbnew.serialize(() => {           
        dbnew.run("DROP TABLE IF EXISTS team");
        dbnew.run("CREATE TABLE IF NOT EXISTS team (id INTEGER PRIMARY KEY AUTOINCREMENT,name text)");
        dbnew.run("INSERT INTO team (name) VALUES ('team1')");
        dbnew.run("INSERT INTO team (name) VALUES ('team2')");
        dbnew.run("INSERT INTO team (name) VALUES ('team3')");

        dbnew.run("DROP TABLE IF EXISTS matches");
        dbnew.run("CREATE TABLE IF NOT EXISTS matches (id INTEGER PRIMARY KEY AUTOINCREMENT,name text,status text,dateTime DATETIME,homeTeam text,awayTeam text,winnerTeam text,noOfUsers Integer)");
        dbnew.run("INSERT INTO matches (name, status,dateTime,homeTeam,awayTeam,winnerTeam,noOfUsers) VALUES ('Match 1','live','2016-08-30 18:47:56', 'HT', 'AT', 'HT',3)");
        dbnew.run("INSERT INTO matches (name, status,dateTime,homeTeam,awayTeam,winnerTeam,noOfUsers) VALUES ('Match 2','live','2016-08-23 18:47:56', 'HT', 'AT', 'HT',5)");
        dbnew.run("INSERT INTO matches (name, status,dateTime,homeTeam,awayTeam,winnerTeam,noOfUsers) VALUES ('Match 3','Published','2016-08-03 18:47:56', 'HT', 'AT', 'AT',18)");
        dbnew.run("INSERT INTO matches (name, status,dateTime,homeTeam,awayTeam,winnerTeam,noOfUsers) VALUES ('Match 4','Published','2016-08-06 18:47:56', 'HT', 'AT', 'HT',15)");
        dbnew.run("INSERT INTO matches (name, status,dateTime,homeTeam,awayTeam,winnerTeam,noOfUsers) VALUES ('Match 5','Published','2016-08-26 18:47:56', 'HT', 'AT', '',1)");
        dbnew.run("INSERT INTO matches (name, status,dateTime,homeTeam,awayTeam,winnerTeam,noOfUsers) VALUES ('Match 6','Ended','2016-08-17 18:47:56', 'HT', 'AT', 'HT',2)");

        dbnew.run("DROP TABLE IF EXISTS userMatch");
        dbnew.run("CREATE TABLE IF NOT EXISTS userMatch (id INTEGER PRIMARY KEY AUTOINCREMENT,userId INTEGER,matchId INTEGER)");
        dbnew.run("INSERT INTO userMatch (userId, matchId) VALUES (1,3)");
        dbnew.run("INSERT INTO userMatch (userId, matchId) VALUES (1,2)");
        dbnew.run("INSERT INTO userMatch (userId, matchId) VALUES (2,1)");
        dbnew.run("INSERT INTO userMatch (userId, matchId) VALUES (2,2)");
      });
})