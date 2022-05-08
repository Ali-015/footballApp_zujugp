import * as Express from 'express';
import { dbnew } from 'database';

export const getMatches = async(req: Express.Request, res: Express.Response) => {
	var sql = "select * from matches"
		var params = []
		await dbnew.all(sql, params, (err, rows) => {
			if (err) {
			  res.status(400).json({"error":err.message});
			  return;
			}
			res.render('matches' , {
				"message":"success",
				"data":rows
			  });
			// res.json({
			// 	"message":"success",
			// 	"data":rows
			// })
		  });;
};

export const getMatchById = (req: Express.Request, res: Express.Response) => {
	const id: number = req.params.id;
	var sql = "select * from match where id = ?"
    dbnew.get(sql, id, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
};

export const getUserMatchesById = async(req: Express.Request, res: Express.Response) => {
	const id: number = req.params.id;
	let allPublishedMatches;
	var userSubscribedMatches = "select * from matches m INNER JOIN userMatch um on m.id = um.matchId where um.userId = ? and m.status = 'Published'"
	var allMatches = "select * from matches m where m.status = 'Published'"
	dbnew.serialize(() => {
		dbnew.all(allMatches, (err, row) => {
			if (err) {
				res.status(400).json({ "error": err.message });
				return;
			}
			allPublishedMatches = row
		});
		dbnew.all(userSubscribedMatches, id, (err, row) => {
			if (err) {
				res.status(400).json({ "error": err.message });
				return;
			}
			row.forEach(r => r.isUserSignedUp = true);
			res.render('userMatches' , {
				"message":"success",
				"data":{upcomingForYou:row, allMatches: allPublishedMatches}
			  });
			// res.json({
			// 	"message": "success",
			// 	"data": {upcomingForYou:row, allMatches: allPublishedMatches}
			// })
		});
	})
};
