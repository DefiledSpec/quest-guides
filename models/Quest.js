const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new Schema({
  title: { 
	  type: String, 
	  required: true,
	//   unique: true 
	},
  yt: { 
	  type: String, 
	  required: true 
	},
  ytName: {
	  type: String,
	  null: false,
	  default: 'Slayermusiq1',

  },
  runeHq: String,
  length: { 
	  type: String 
	},
  difficulty: String,
  qp: { 
	  type: Number 
	},
  series: { 
	  type: String,
	  default: 'N/A'
	},
  members: {
	  type: Boolean
  },
  slug: String
});

questSchema.methods = {
	createSlug() {
		// if(this.title.contains(/\w+/)) return this.slug = this.title.replace(/w+/, '-')
		this.slug = this.title
	}
}

const Project = mongoose.model("Quest", questSchema);

module.exports = Project;
