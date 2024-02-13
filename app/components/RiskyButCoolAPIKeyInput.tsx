import { Icon, useBreakpoint } from '@tldraw/tldraw'
import { useCallback } from 'react'

export function RiskyButCoolAPIKeyInput() {
	const breakpoint = useBreakpoint()


	const handleQuestionMessage = useCallback(() => {
		window.alert(
			`If you have an OpenAI developer key, you can put it in this input and it will be used when posting to OpenAI.\n\nSee https://platform.openai.com/api-keys to get a key.\n\nPutting API keys into boxes is generally a bad idea! If you have any concerns, create an API key and then revoke it after using this site.`
		)
	}, [])

	return (
		<div className={`your-own-api-key ${breakpoint < 5 ? 'your-own-api-key__mobile' : ''}`}>
			<div className="your-own-api-key__inner">
				<button className="question__button" onClick={handleQuestionMessage}>
					<Icon icon="question" />
				</button>
			</div>
		</div>
	)
}
