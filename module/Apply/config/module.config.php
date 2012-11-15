<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Apply\Controller\Ls' => 'Apply\Controller\LsController',
        ),
    ),

    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'apply' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/apply[/:controller[/:action]][/:id]',
                    'constraints' => array(
                    	'controller' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Apply\Controller\Ls',
                        'action'     => 'index',
                    ),
                ),
            ),
            'ls' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/apply/ls[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Apply\Controller\Ls',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'apply' => __DIR__ . '/../view',
        ),
    	'strategies' => array(
    			'ViewJsonStrategy',
    	),
    ),
);