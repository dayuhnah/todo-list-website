import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

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
		if (this.newTask.trim() === '') { 
			console.warn('No task entered'); 
			return; 
		} 
		this.items.push(this.newTask);
		this.newTask = ''; 
	} 

	public deleteTask(index: number) { 
		this.items = this.items.filter((_, i) => i !== index); 
	} 
}
