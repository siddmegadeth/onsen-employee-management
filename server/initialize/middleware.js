(function () {
    app.use(express.static("public"));
    app.set('host', process.env.NODE_IP || 'localhost');
    app.set("PORT", process.env.PORT || 3000);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(bodyParser.json());
})();