// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				{
					id: 'id1',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
				},
				{
					id: 'id2',
					content: 'This is a shorter note'
				}
			]
		}
	},
	actions: {
		addNote(newNoteContent) {
			let currentDate = new Date().getTime(),
				id = currentDate.toString()

			let note = {
				id,
				content: newNoteContent
			}

			this.notes.unshift(note)
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter((note) => {
				return note.id !== idToDelete
			})
		}
	},
	getters: {
		getNoteContent: (state) => {
			return state.notes[0].content
		}
	}
})
