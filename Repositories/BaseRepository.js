/*** 
* BaseRepository 
**/

module.exports.setModel = (model) => { 
    this.model = model;
}

module.exports.getModel = () => { 
    return this.model;
}

module.exports.fetchOne = (conditions) => {
    return this.getModel().findOne({
	  where: conditions 
	}).then(Result => {
      return Result;
    }).catch(err => {
        console.error('Unable to Fetch', err);
        return "error";
    });
};

module.exports.fetchIncluded = (conditions,Includes) => {
    // console.log(conditions);
    // console.log(Includes);

    return this.getModel().findAll({
      where: conditions ,
      include: Includes,
      logging: console.log,
	}).then(Result => {
      return Result;
    }).catch(err => {
        console.error('Unable to Fetch', err);
        return "error";
    });
};