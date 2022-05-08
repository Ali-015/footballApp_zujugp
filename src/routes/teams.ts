import { dbnew } from 'database';
import * as Express from 'express';

export const getTeamsnew = (req: Express.Request, res: Express.Response) => {
	var sql = "select * from team"
		var params = []
		dbnew.all(sql, params, (err, rows) => {
			if (err) {
			  res.status(400).json({"error":err.message});
			  return;
			}
			res.json({
				"message":"success",
				"data":rows
			})
		  });
};

export const getTeams = (req: Express.Request, res: Express.Response) => {
	var sql = "select * from team"
		var params = []
		dbnew.all(sql, params, (err, rows) => {
			if (err) {
			  res.status(400).json({"error":err.message});
			  return;
			}
			res.render('teams' , {
				"message":"success",
				"data":rows
			  });
			// res.json({
			// 	"message":"success",
			// 	"data":rows
			// })
		  });
};

export const getTeamById = (req: Express.Request, res: Express.Response) => {
	const id: number = req.params.id;
	var sql = "select * from team where id = ?"
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
