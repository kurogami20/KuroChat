import {
	Calendar,
	Search,
	Settings,
	SquarePen,
	FolderOpen,
	ChevronDown,
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
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
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
						<NavLink to="/login">Connexion</NavLink>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarFooter>
		</Sidebar>
	);
}
