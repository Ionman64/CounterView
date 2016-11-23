var counter;
function load() {
	counter = new counterView();
	counter.init();
}
function counterView() {
	this.count = 0;
	this.timings = document.getElementById("counterView-timings");
	this.checkpoints = [];
	this.init = function() {
		
	}
	this.countup = function() {
		var checkpoint = {"id":++this.count, "time":moment().format("HH:mm:ss")};
		document.getElementById("counterView-count").innerHTML = checkpoint.id;
		var option = this.el("option");
		option.appendChild(document.createTextNode(this.count + ": " + checkpoint.time));
		this.timings.appendChild(option);
		this.timings.scrollTop = this.timings.scrollHeight;
		document.getElementById("countup").focus();
		this.checkpoints.push(checkpoint);
		this.save();
		return false;
	}
	this.el = function(m) {
		return document.createElement(m);
	}
	this.reset = function() {
		this.count = 0;
		document.getElementById("counterView-count").innerHTML = this.count;
		while (this.timings.firstChild) {
			this.timings.removeChild(this.timings.firstChild);
		}
		this.save();
	}
	this.save = function() {
		
	}
}