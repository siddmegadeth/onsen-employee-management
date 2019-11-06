(function () {

    EmployeeSchema = module.exports = new Schema({
        employeeName: { type: String },
        employeeID: { type: Number, unique: true, index: true },
        projectAllocation: { type: [String], default: 'BENCH' },
        comments: { type: String },
        selfRating: { type: Number, default: 0 },
        isManager: { type: Boolean, default: false },
        updated_at: { type: Date },
        created_at: { type: Date }
    });

    EmployeeSchema.pre('save', function (next) {
        now = new Date();
        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now;
        }
        next();
    });

    EmployeeModel = module.exports = mongoose.model("EmployeeModel", EmployeeSchema);

})();

