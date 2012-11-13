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
use Zend\Di\Di;

class LsController extends AbstractActionController
{
	public function lAction()
	{
		$result = new JsonModel(array(
				'some_parameter' => 'some value',
				'success'=>true,
		));
		
		return $result;
	}
}
