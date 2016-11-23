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
		this.checkpoints = [];
	}
	this.save = function() {
	  var text = "id,time\n";
	  for (var i=0;i<this.checkpoints.length;i++) {
		text += this.checkpoints[i].id + "," + this.checkpoints[i].time + "\n";
	  }
	  //http://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
	  var element = this.el('a');
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	  element.setAttribute('download', "counter.csv");
	  element.style.display = 'none';
	  document.body.appendChild(element);
	  element.click();
	  document.body.removeChild(element);
	}
}