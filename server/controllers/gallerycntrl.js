 module.exports={

createArt: (req, res) => {
    const db = req.app.get('db');
    const { title, description, painting_url, price } = req.body;
console.log(req.session.user)
    db.art.make_art([title, description, painting_url, price, req.session.user.artist_id]).then(resp => {
      res.status(200).send(resp);
    });
  }
}

