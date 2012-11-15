<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Apply\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
//use Apply\Model\Album;          // <-- Add this import
//use Album\Form\AlbumForm;       // <-- Add this import

class LsController extends AbstractActionController
{
	public function indexAction()
	{
		return "hoge";
	}
	
	public function lAction()
	{
		$result = new JsonModel(array(
				'resultset' => (array(
					'path'=> (array(
							current => 'current',
							home => 'home')),
					'status' => (array(
							'code' => 'code',
							'message' => 'message')),
					'files' => (array(
							'name' => 'name',
							'type' => 'type',
							'permission' => 'permission',
							'date' => 'date',
							'size' => 'size',
							'owner' => 'owner',
							'group' => 'group'))
				))
		));
		return $result;
	}
}
