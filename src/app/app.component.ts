import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'],
	standalone: true,
	imports: [FormsModule, CommonModule] // ✅ Ensures *ngFor and [(ngModel)] work
}) 
export class AppComponent { 
	public items: string[] = []; 
	public newTask: string = ''; 
	public showPopup: boolean = false;
	public selectedTaskIndex: number | null = null;
	public selectedTaskName: string = '';

	// ✅ Add task to list
	public addToList() { 
		if (this.newTask.trim() === '') return; 
		this.items.push(this.newTask);
		this.newTask = ''; 
	} 

	// ✅ Show confirmation popup before deleting a task
	public confirmTask(index: number) {
		this.selectedTaskIndex = index;
		this.selectedTaskName = this.items[index]; // Get task name for display
		this.showPopup = true;
	}

	// ✅ Delete the task if confirmed
	public deleteTask() { 
		if (this.selectedTaskIndex !== null) {
			this.items = this.items.filter((_, i) => i !== this.selectedTaskIndex);
		}
		this.closePopup(); // Close the modal
	} 

	// ✅ Close popup without deleting task
	public closePopup() {
		this.showPopup = false;
		this.selectedTaskIndex = null;
		this.selectedTaskName = '';
	}
}
