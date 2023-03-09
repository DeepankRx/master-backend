const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./Database/connection');
const AccountGroupMaster = require('./routers/AccountGroupMaster');
const ItemGroupMaster = require('./routers/ItemGroupMaster');
const ItemMaster = require('./routers/ItemMaster');
const ItemTrn = require('./routers/ItemTrn');
const PartyMaster = require('./routers/PartyMaster');
const PartyTrn = require('./routers/PartyTrn');
const Auth = require('./routers/Auth');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', AccountGroupMaster);
app.use('/ItemGroupMaster', ItemGroupMaster);
app.use('/ItemMaster', ItemMaster);
app.use('/ItemTrn', ItemTrn);
app.use('/api', PartyMaster);
app.use('/PartyTrn', PartyTrn);
app.use('/Auth', Auth);
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
