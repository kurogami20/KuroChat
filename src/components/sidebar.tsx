import {
	Calendar,
	Search,
	Settings,
	SquarePen,
	FolderOpen,
	ChevronDown,
	CircleUserRound,
	LogOut,
} from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from './ui/collapsible';
import { NavLink } from 'react-router';
import {
	convoListAtom,
	currentConversationAtom,
} from '@/storage/conversationStore';
import { useAtomValue, useSetAtom } from 'jotai/react';
import { userAtom } from '@/storage/userStore';

// Menu items.
const items = [
	{
		title: 'New Chat',
		url: '#',
		icon: SquarePen,
	},
	{
		title: 'All Chats',
		url: '#',
		icon: FolderOpen,
	},
	{
		title: 'Search chats',
		url: '#',
		icon: Search,
	},
];
const chats = [
	'What is AI?',
	'How does machine learning work?',
	'What are neural networks?',
	'Explain deep learning.',
	'What is natural language processing?',
	'What are the applications of AI?',
	'How does computer vision work?',
	'What is reinforcement learning?',
	'Explain generative AI.',
	'What are the ethical considerations of AI?',
];

export function AppSidebar() {
	const setConvoList = useSetAtom(convoListAtom);
	const userValue = useAtomValue(userAtom);
	const setUser = useSetAtom(userAtom);
	const setConvo = useSetAtom(convoListAtom);
	const setCurrentConversation = useSetAtom(currentConversationAtom);
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									id={item.title}
									key={item.title}
									onClick={() => {
										if (item.title === 'New Chat') setConvoList([]);
										setCurrentConversation(null);
										window.location.reload();
									}}
								>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel>
							{' '}
							<CollapsibleTrigger className="cursor-pointer text-left w-full">
								All chats{' '}
							</CollapsibleTrigger>
							<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									{chats.map((item, index) => (
										<SidebarMenuItem key={index}>
											<SidebarMenuButton asChild>
												<a href={item}>
													<span>{item}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
			</SidebarContent>
			<SidebarFooter>
				<SidebarGroup>
					<SidebarGroupContent>
						{userValue.user ? (
							<span className="flex gap-2 items-center w-full">
								{' '}
								<CircleUserRound /> {userValue.user}
								<LogOut
									className="self-end cursor-pointer ml-15"
									onClick={() => {
										setUser({ token: '', user: '' });
										setConvo([]);
										setCurrentConversation(null);
									}}
								/>
							</span>
						) : (
							<NavLink to="/login">Connexion</NavLink>
						)}
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarFooter>
		</Sidebar>
	);
}
