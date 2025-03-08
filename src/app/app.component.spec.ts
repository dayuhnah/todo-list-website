import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
//import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'],
	standalone: true,
	imports: [FormsModule, CommonModule]
}) 
export class AppComponent { 
	public items: string[] = []; 
	public newTask: string = ''; 

	public addToList() { 
		console.log('Add button clicked'); // Debugging

		if (this.newTask.trim() === '') { 
			console.warn('No task entered'); 
			return; 
		} 

		this.items.push(this.newTask);
		console.log('Task added:', this.items); 

		this.newTask = ''; // Clear input field
	} 

	public deleteTask(index: number) { 
		this.items = this.items.filter((_, i) => i !== index);
		console.log('Task deleted:', this.items);
	} 
}
